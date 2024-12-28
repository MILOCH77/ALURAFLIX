import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {
  return (
      <div>
        <PageDefault>
          <h2>Cadastro de Cateoria</h2>

            <form>
              
              <label>
                Nome da Categoria:
                <input
                  type="text"
                />
              </label>

              <button>
                Cadastrar
              </button>

            </form>

            <Link to="/">
              Voltar para a Home
            </Link>          
        </PageDefault>
      </div>
    
  );
}

export default CadastroCategoria;
