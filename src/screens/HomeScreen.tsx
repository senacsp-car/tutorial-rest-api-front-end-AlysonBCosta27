import axios from "axios";
import { useEffect, useState } from "react";

type Item = {
    id?: number;
    nome: string;
    descricao: string;
}

export default function HomeScreen() {
    const [itens, setItens] = useState<Item[]>([]);
    const [nome, setNome] = useState<string>();
    const [descricao, setDescricao] = useState<string>();


    useEffect(function () {
    }, []);

    function botaoSalvarClicado() {
        if ((nome !== undefined) && (descricao !== undefined)) {
            const item: Item = {
                nome,
                descricao
            }
            //TODO Recarregar a tela
            axios.post('http//localhost:4000/api/itens')
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {itens.map(function (item) {
                    return <li>{item.nome}</li>
                })}
            </ul>
            <div>
                <input placeholder='Nome' onChange={function (e) { setNome(e.target.value) }} />
                <input placeholder='Descrição' onChange={function (e) { setNome(e.target.value) }} />
                <button>Salvar</button>
            </div>
            <button onClick={botaoSalvarClicado}>Salvar</button>
        </div>
    );
}