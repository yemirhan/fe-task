export interface onChangeProps {
    target: {
        value: any
    }
}
export interface InputProps {
    defaultValue?: string | number,
    value?: string | number,
    onChange: ({ target: { value } }: onChangeProps) => void,
    props?: any | null,
    placeholder?: string
}