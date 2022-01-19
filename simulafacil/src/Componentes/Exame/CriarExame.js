import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export function CriarExame(){
    return(
        <div>
            <h1> Modelo de Prova:</h1>
            <select>
                <option>ENEM</option>
                <option>USP</option>
                <option>UERJ</option>
                <option>UNESP</option>
                <option>UNICAMP</option>
            </select>
            <h1>
                Dificuldade:
            </h1>
            <select>
                <option>Fácil</option>
                <option>Média</option>
                <option>Difícil</option>
            </select>
            <h1>Selecione as matérias:</h1>
                <form>
                  <label> <input type="checkbox" name="Matemática"></input> Matemática</label> <br/>
                  <label> <input type="checkbox" name="Matemática"></input> Português</label> <br/>
                  <label> <input type="checkbox" name="Matemática"></input> Biologia</label> <br/>
                  <label> <input type="checkbox" name="Matemática"></input> Física</label> <br/>
                  <label> <input type="checkbox" name="Matemática"></input> Química</label> <br/>
                  <label> <input type="checkbox" name="Matemática"></input> Inglês</label> <br/>
                </form>
                <div>
                <Link to='/'>
                <Button>Retornar</Button>
                </Link>
            </div>
        </div>
    );
}