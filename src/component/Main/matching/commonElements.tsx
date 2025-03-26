import Button from "../../button/button"
import "./commonStyle.scss"

export const Title = ({text}: any) => <p className="title" dangerouslySetInnerHTML={{ __html: text }} />
export const SubTitle = ({text}:any) => <p className="description">{text}</p>
export const NextButton = ({onClick, children}:any) => (
  <Button type="submit" variant={'NextBtn'} onClick={onClick}>{children}</Button>
)