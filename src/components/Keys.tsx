interface KeysProps {
    label: string;
    keyClass?: boolean|string;
    onButtonClick: (value: string) => void;
}

export default function Keys({ label, keyClass, onButtonClick }: KeysProps) {
    const buttonClass = keyClass === "equal"
        ? "col-span-2 bg-[#4ccdc6] text-[#F1EFEC] font-semibold hover:bg-[#4ccdc6]"
        : "bg-[#141414] hover:bg-[#4ccdc742] text-[#F1EFEC]";

    return (
        <div
            className={`flex cursor-pointer items-center justify-center p-4 rounded-[5px] ${buttonClass}`}
            onClick={() => onButtonClick(label)}
        >
            {label}
        </div>
    );
}