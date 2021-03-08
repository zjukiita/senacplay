import React from 'react';
import GlobalMenu from '../../components/GlobalMenu'
import classes from './styles.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../img/exampleImg.jpg'
import FilmGif from '../../img/filmes.gif'

const Home = () => {
    return (
        <>
            <div className={classes.principalPage}>
                <img className={classes.imgLogo} src={Logo} width="50" height="50" />
                <Link to="/login"><button type="button" className={classes.loginButton}>Entrar</button></Link>

                <div className={classes.initialSection}>
                    <h4 class="mt-5">Tá afim de assistir um filme de ação? ou quem sabe um filme clássico? até mesmo uma comédia?</h4>
                    <h5>Crie sua conta no Senac Play e assista filmes de graça!</h5>
                    <Link to="/register"><button type="button" className={classes.registerButton}>Criar conta</button></Link>
                </div>
            </div>

            <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

            <div class="container-fluid mt-0" className={classes.secondSection}>
                <h4>Aproveite filmes em Full HD dublado em seu navegador!</h4>
                <h5>Filmes de todos os tipos em alta qualidade e atualizados!</h5>
            </div>

            <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

            <div class="container-fluid" className={classes.thirdSection}>
                <h4>Assista em qualquer lugar e a qualquer hora</h4>
                <h5>Temos nosso próprio aplicativo para celular para você assistir em qualquer lugar</h5>
            </div>

            <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

            <div class="container-fluid" className={classes.fourSection}>
                <h4>Aplicativo Desktop</h4>
                <h5>Baixe nosso aplicativo Desktop para um maior conforto!</h5>
            </div>

            <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

            <div class="container-fluid row" className={classes.informationSection}>
                <div class="row text-center">
                    <div class="col-sm-4">
                        <p>Tire suas dúvidas</p>
                        <p>Entre em contato</p>
                        <p>Redes Sociais</p>
                    </div>
                    <div class="col-sm-4">
                        <p>Termos de uso</p>
                        <p>Perguntas frequentes</p>
                        <p>Formas de assistir</p>
                    </div>
                    <div class="col-sm-4">
                        <p>Conta</p>
                        <p>Privacidade</p>
                        <p>Aplicativos</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;