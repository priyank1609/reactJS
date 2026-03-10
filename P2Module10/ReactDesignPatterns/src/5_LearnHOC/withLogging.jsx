export default function withLogging(Component) {
    return (props) => {
        console.log(props);
        return <Component {...props} />
    }
}