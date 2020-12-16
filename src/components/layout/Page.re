[@bs.obj]
external makeProps: (~name: 'name, ~key: string=?, unit) => {. "name": 'name} = "";

let make = (props) => {
    let name = props##name;
    <>
        <Next.Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
            <title>{React.string(name ++ "Blog")}</title>
        </Next.Head>
        children
    </>
}