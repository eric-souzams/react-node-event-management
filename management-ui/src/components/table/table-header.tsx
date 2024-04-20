import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'td'> {}

export function TableHeader(props: TableHeaderProps) {
    return (
        <td className="py-3 px-4 text-sm font-semibold text-left" {...props} />
    )
}