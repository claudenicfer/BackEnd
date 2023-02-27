import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'


function AdminFuncionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect (() => {
        async function getFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        getFuncionalidades()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const title = form.title.value
        const description = form.description.value
        const image = form.image.value

        const response = await CmsApi().postFuncionalidade({title, description, image})
        if(!response.ok) {
            alert('Erro ao cadastrar funcionalidade')
            return
        }
        const funcionalidade = await response.json()
        alert('Funcionalidade cadastrada com sucesso')
        setFuncionalidades([...funcionalidades, funcionalidade.data])
        form.reset()
    }

    async function excluirFuncionalidade(id) {
        console.log(id)
        const response = await CmsApi().deleteFuncionalidade(id)
        if(!response.ok) {
            alert('Erro ao excluir funcionalidade')
            return
        }

        alert('Funcionalidade excluída com sucesso')
        const funcionalidadesAtualizadas = funcionalidades.filter((funcionalidade) => funcionalidade.id !== id)
        setFuncionalidades(funcionalidadesAtualizadas)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}

        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        // Cria um input para o título
        const inputTitulo = document.createElement('input')
        inputTitulo.type = 'text'
        inputTitulo.value = colunaTitulo.innerText
        colunaTitulo.innerText = ''
        colunaTitulo.appendChild(inputTitulo)
        // Cria um input para a descrição
        const colunaDescricao = linha.children[2]
        const inputDescricao = document.createElement('input')
        inputDescricao.type = 'text'
        inputDescricao.value = colunaDescricao.innerText
        colunaDescricao.innerText = ''
        colunaDescricao.appendChild(inputDescricao)
        // Cria um input para image
        const colunaImage = linha.children[3]
        const inputImage = document.createElement('input')
        inputImage.type = 'text'
        inputImage.value = colunaImage.innerText
        colunaImage.innerText = ''
        colunaImage.appendChild(inputImage)
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        const inputTitulo = colunaTitulo.children[0]

        const colunaDescricao = linha.children[2]
        const inputDescricao = colunaDescricao.children[0]

        const colunaImage = linha.children[3]
        const inputImage = colunaImage.children[0]

        const response = await CmsApi().patchFuncionalidade({id: id, title: inputTitulo.value, description: inputDescricao.value, image: inputImage.value})
        if(!response.ok) {
            alert('Erro ao editar funcionalidade')
            return
        }
        alert('Funcionalidade editada com sucesso')
        
        colunaTitulo.innerText = inputTitulo.value
        colunaDescricao.innerText = inputDescricao.value
        colunaImage.innerText = inputImage.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container className="conteudo-margin">
            <hr />
            <h2>Adicionar Funcionalidade</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Digite o título da funcionalidade" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Digite a descrição" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="text" placeholder="Insira o link da imagem" />
                </Form.Group>
                <Button variant="primary" className='btn-person' type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Lista de Funcionalidades</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map((funcionalidade) => (
                        <tr key={funcionalidade.id}>
                            <td>{funcionalidade.id}</td>
                            <td>{funcionalidade.title}</td>
                            <td>{funcionalidade.description}</td>
                            <td>{funcionalidade.image}</td>
                            <td>
                                <Button className='btn-person' variant="primary" onClick={(event) => {habilitarEdicao(event.target, funcionalidade.id)}}>Editar</Button>
                                 | 
                                <Button variant="danger" onClick={() => {excluirFuncionalidade(funcionalidade.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminFuncionalidades