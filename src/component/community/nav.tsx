import { useState, useEffect, useRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import styled from "styled-components";

interface SearchData {
    location?: string;
    updatedAt?: string;
}

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const Badge = styled.div<{ isComplete: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    background-color: ${props => props.isComplete ? '#FF7920' : 'white'};
    color: ${props => props.isComplete ? 'white' : '#9c9c9c'};
    border: 1px solid #9c9c9c;
    border-radius: 20px;
    font-size: 14px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: #FF7920;
        color: ${props => props.isComplete ? 'white' : '#FF7920'};
    }

    svg {
        width: 16px;
        height: 16px;
    }
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    display: ${props => props.isOpen ? 'block' : 'none'};
    z-index: 1000;
    min-width: 120px;
    border: 1px solid #eee;
    max-height: 300px;
    overflow-y: auto;
`;

const DropdownItem = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    color: #666;
    transition: all 0.2s ease;
    font-size: 14px;

    &:hover {
        background-color: #f5f5f5;
        color: #FF7920;
    }
`;

const NavContainer = styled.div`
    padding: 0 16px;
`;

const Nav = () => {
    const [isSearchComplete, setIsSearchComplete] = useState(false);
    const [searchData, setSearchData] = useState<SearchData>({});
    const [filteredData, setFilteredData] = useState<any>([]);
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const locationRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    const locations = ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
    const sortOptions = ["최신순", "인기순"];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
                setIsLocationOpen(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLocationSelect = (location: string) => {
        setSearchData(prev => ({ ...prev, location }));
        setIsLocationOpen(false);
        setIsSearchComplete(true);
    };

    const handleSortSelect = (sort: string) => {
        setSearchData(prev => ({ ...prev, updatedAt: sort }));
        setIsSortOpen(false);
        setIsSearchComplete(true);
    };

    return (
        <NavContainer>
            <div style={{display: "flex", gap: "8px"}}>
                <DropdownContainer ref={locationRef}>
                    <Badge 
                        isComplete={!!searchData.location}
                        onClick={() => setIsLocationOpen(!isLocationOpen)}
                    >
                        {searchData.location || "지역"}<HiChevronDown/>
                    </Badge>
                    <DropdownMenu isOpen={isLocationOpen}>
                        {locations.map((location) => (
                            <DropdownItem 
                                key={location}
                                onClick={() => handleLocationSelect(location)}
                            >
                                {location}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </DropdownContainer>

                <DropdownContainer ref={sortRef}>
                    <Badge 
                        isComplete={!!searchData.updatedAt}
                        onClick={() => setIsSortOpen(!isSortOpen)}
                    >
                        {searchData.updatedAt || "최신순"}<HiChevronDown/>
                    </Badge>
                    <DropdownMenu isOpen={isSortOpen}>
                        {sortOptions.map((option) => (
                            <DropdownItem 
                                key={option}
                                onClick={() => handleSortSelect(option)}
                            >
                                {option}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </DropdownContainer>
            </div>
        </NavContainer>
    );
};

export default Nav;