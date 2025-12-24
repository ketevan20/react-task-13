const WithTheme = (WrappedComponent: any) => {
    return function (props: any) {
        const { theme, ...restProps } = props;

        if (theme === "dark") {
            return <div className="w-full h-screen bg-black text-white">
                <WrappedComponent {...restProps} />
            </div>
        }
        return <div className="w-full h-screen bg-white text-black">
            <WrappedComponent {...restProps} />
        </div>
    }
}

export default WithTheme