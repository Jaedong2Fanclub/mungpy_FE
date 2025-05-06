import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { MessageProps } from "../../constants/interface";
import SockJS from "sockjs-client";
import { Client, IMessage } from "@stomp/stompjs";
import { LuSendHorizontal } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import DateSeparator from "./Date";

export default function Chat() {
    const {data, animalId} = useLocation().state as {data: {shelterName: string, images: string, breedName: string, gender: string, isNeutered: string, age: string, weight: number}, animalId: number};
    console.log(data);
    const [roomId, setRoomId] = useState<number | null>(null);
    const [userId, setUserId] = useState<number | null>(null);
    const [messages, setMessages] = useState<MessageProps[]>([]);
    const [lastChatMessageId, setLastChatMessageId] = useState<number | null>(null); // 이전 메시지 불러오기
    const [inputValue, setInputValue] = useState<string>("");

    const stompClientRef = useRef<Client | null>(null);
    const messageEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

     // 🧠 자동 스크롤
    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
      };
      
      const getTodayString = () => {
        const now = new Date();
        return `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
      };
    

    // 🧠 채팅 데이터 가져오기
    useEffect(() => {
        axios.get(`/api/chat/animals/${animalId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            const {roomId, userId, messages} = res.data;
            setRoomId(roomId);
            setUserId(userId);
            setMessages(messages);
            if(messages.length > 0) {
                const oldMessage = messages[messages.length - 1].chatMessageId;
                setLastChatMessageId(oldMessage);
            }
        }).catch((err) => {
            console.log("채팅 데이터 가져오기 실패", err);
        })
    }, [])

    // 🧠 채팅 소켓 연결 (STOMP)
    useEffect(() => {
        if(!roomId) return;
        const token = localStorage.getItem("token");
        if (!token) return;

        // 예시 https://{백엔드 주소}:{포트}/ws
        const socket = new SockJS(`${process.env.REACT_APP_BASE_URL}/ws`);
        const stompClient = new Client({
            webSocketFactory: () => socket,
            connectHeaders: {
                Authorization: `Bearer ${token}`
            },
            onConnect: () => {
                console.log("채팅 소켓 연결 성공");
                stompClient.subscribe(`/topic/chat/${roomId}`, (message: IMessage) => {
                    const newMessage: MessageProps = JSON.parse(message.body);
                    setMessages((prevMessages) => [newMessage, ...prevMessages]); // 여기서만 렌더링
                });
            },
            onStompError: (frame: any) => {
                console.log("채팅 소켓 오류", frame);
                alert("채팅 소켓 오류가 발생했습니다. 다시 시도해주세요.");
            },
            onWebSocketError: (event: any) => {
                console.log("채팅 소켓 웹소켓 오류", event);
                alert("채팅 소켓 웹소켓 오류가 발생했습니다. 다시 시도해주세요.");
            },
        });
        stompClient.activate();
        stompClientRef.current = stompClient;

        return () => {
            stompClientRef.current?.deactivate();
        };
    }, [roomId]);

    // 🧠 메시지 전송
    const sendMessage = () => {
        if(!stompClientRef.current || !stompClientRef.current.connected) {
            alert("채팅 소켓이 연결되지 않았습니다. 다시 시도해주세요.");
            return;
        }

        if(!inputValue.trim() || !roomId || !userId) return;

        const chatMessage = {
            roomId,
            senderId: userId,
            content: inputValue.trim(),
        };

        // 메시지 전송만 하고 렌더링 X
        stompClientRef.current?.publish({
            destination: "/app/chat",
            body: JSON.stringify(chatMessage)
        });

        setInputValue(""); // 입력 값 초기화
    }

    // 🧠 메시지 입력 시 자동 스크롤
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // 입력창에 포커스 주기
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <ChatHeader>
                    <p style={{fontSize: "18px", fontWeight: "bold", textAlign: "center", margin: "0"}}>{data.shelterName}</p>
            </ChatHeader>
            <div style={{ flex: 1, display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "row", gap: "10px", height: "85px", alignItems: "center", borderBottom: "1px solid #EDEDED"}}>
                    <img src={data.images[0]} alt="동물 이미지" style={{width: "58px", height: "58px", borderRadius: "20%"}}/>
                    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        <p style={{margin: "0"}}>{data.breedName}</p>
                        <div style={{display: "flex", flexDirection: "row", gap: "5px", color: "#9C9C9C", fontWeight: "normal"}}>
                            <p style={{margin: "0"}}>{data.gender}({data.isNeutered})</p>
                            <p style={{margin: "0"}}>{data.age}</p>
                            <p style={{margin: "0"}}>{data.weight}kg</p>    
                        </div>
                    </div>
                </div>
                {/* 채팅 메시지 목록 */}
                <DateSeparator label={getTodayString()} />
                <div
                    style={{
                        flex: 1,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column-reverse",
                        padding: "16px",

                    }}
                >
                    {messages.map((msg) => (
                        <div key={msg.chatMessageId} style={{ marginBottom: "10px" }}>
                            <strong>{msg.senderId === userId ? "나" : `보호소`}</strong>: {msg.content}
                            <div style={{ fontSize: "12px", color: "#888" }}>{msg.createdAt}</div>
                        </div>
                    ))}
                    <div ref={messageEndRef} />
                </div>  
                {/* 메시지 입력 창 */}
                <div style={{ display: "flex", padding: "12px", height: "70px", flexShrink: 0, alignItems: "center"}}>
                    <button style={{padding: "8px 16px", border: "none", backgroundColor: "transparent", cursor: "pointer"}}>
                        <FaPlus style={{width: "24px", height: "24px", color: "#B5B5B5"}}/>
                    </button>
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        placeholder="메시지 보내기"
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ flex: 1, padding: "5px 12px", height: "40px", border: "1px solid #E9E9E9", borderRadius: "30px", backgroundColor: "#F5F6F8" }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") sendMessage();
                        }}
                    />
                    <button onClick={sendMessage} style={{ padding: "8px 16px", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                        <LuSendHorizontal style={{width: "24px", height: "24px", color: "#B5B5B5"}}/>
                    </button>
                </div>
            </div>
        </div>
    );
}