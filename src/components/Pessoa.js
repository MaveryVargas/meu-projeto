import styles from './Pessoa.module.css'

function Pessoa ({nome, idade, profissao, foto})
{
    return(
        <div className ={styles.PessoaContainer}>
            <img src = {foto} alt={nome}/>
            <h2 className={styles.PessoaContainer}>Nome: {nome}</h2>
            <p className={styles.PessoaContainer}>Idade: {idade}</p>
            <p className={styles.PessoaContainer}>Profissão: {profissao}</p>
        </div>
    )
}
export default Pessoa