export function Example({message}: ExampleProps) {
    return <div>
        {message ? message : 'Example component'}
    </div>
}

interface ExampleProps {
    message?: string;
}