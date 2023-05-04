import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/ICategory";
import { api } from "../../services/api.service";
import { Categorias } from "./styles";


interface CheckboxGroupProps {
    selectedCategories?: string[];
    onChange?: (selected: string[]) => void;
}

export function CheckboxGroup({ selectedCategories = [], onChange }: CheckboxGroupProps) {
    const [selected, setSelected] = useState(selectedCategories);
    const [categories, setCategories] = useState<ICategory[]>([]);

    async function handleData() {
        const us = await api.get(`categories`);
        setCategories(us.data);

    }

    useEffect(() => {
        handleData();
    }, []);

    const handleChange = (id: string, checked: boolean) => {
        let newSelected = [...selected];
        if (checked) {
            newSelected.push(id);
        } else {
            newSelected = newSelected.filter((value) => value !== id);
        }
        setSelected(newSelected);
        if (onChange) {
            onChange(newSelected);
        }
    };

    return (
        <Categorias>
            {categories.map((category) => (
                <label key={category.id} style={{color: '#000'}}>
                    <input style={{cursor: 'pointer', margin: '0'}} type="checkbox" checked={selected.includes(category.id)} onChange={(e) => handleChange(category.id, e.target.checked)} />
                    {category.name}
                </label>
            ))}
        </Categorias>
    );
}
