import Loader from "../Loader/Loader";

const WithLoader = (WrappedComponent: React.ComponentType) => {
  return function(props: { isLoading: boolean }) {
    const { isLoading, ...restProps } = props;
    if(isLoading) {
        return <Loader />
    } 
    return <WrappedComponent {...restProps} />
  }
}

export default WithLoader