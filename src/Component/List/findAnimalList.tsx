import AnimaFindlItem from "./item";

interface dataProps {
    id:number;
    title:string;
    subtitle: string;
    image: string;
}

interface PostItemProps {
    data: dataProps[];
}

const PostItem:React.FC<PostItemProps> = ({data}) => {
    return(
        <div style={{display : 'flex', overflowX: 'auto', paddingLeft: '20px', scrollbarWidth: 'none'}}>
            {data.map((item: any) => (
                <AnimaFindlItem key={item.id} {...item}/>
            ))}
        </div>
    );
};

export default PostItem;