import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    onSelectChange: (value: string) => void;
    defaultLocale: string;
    disabled: boolean;
};

const LocaleSwitcher = ({ onSelectChange, defaultLocale, disabled }: Props) => {
    return (
        <Select
            onValueChange={onSelectChange}
            defaultValue={defaultLocale}
            disabled={disabled}
        >
            <SelectTrigger className="w-14 bg-dark text-white text-xs px-2 border-white/50 h-7 rounded-xl font-n27">
                <SelectValue placeholder="FR" />
            </SelectTrigger>
            <SelectContent className="min-w-14 border-white/50 bg-dark text-white rounded-xl">
                <SelectItem
                    className="text-xs cursor-pointer focus:bg-white/10 focus:text-white rounded-lg"
                    value="fr"
                >
                    FR
                </SelectItem>
                <SelectItem
                    className="text-xs cursor-pointer focus:bg-white/10 focus:text-white rounded-lg"
                    value="en"
                >
                    EN
                </SelectItem>
            </SelectContent>
        </Select>
    );
};

export default LocaleSwitcher;
