import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './moviecard.module.css';
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className={classes.Card}>
                <img
                    class="mt-5"
                    src={props.movie.imagem}
                    className={classes.images}
                    alt={props.movie.nome}
                    onClick={() => setModalShow(true)}
                />
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header /* closeButton */>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {props.movie.nome}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4><strong>Ano de lançamento:</strong> {props.movie.anoDeLancamento}</h4>
                        <p><strong>Sinopse:</strong> {props.movie.sinopse}</p>
                        <small><strong>Duração:</strong> {props.movie.duracao}</small>
                        <p class="mt-2"><strong>Avaliação:</strong> {props.movie.avaliacao}</p>
                        <p><strong>Categoria:</strong> {props.movie.categoria}</p>
                        <p><strong>Classificação:</strong> {props.movie.classificacao}</p>
                    </Modal.Body>
                    <Modal.Footer className={classes.modal_footer}>
                        <Link to={`/watch/${props.movie.id}`}><Button className={classes.Button}>Assistir</Button></Link>
                        <Button className={classes.Button} onClick={() => setModalShow(false)}>Fechar</Button>

                    </Modal.Footer>
                </Modal>


                {/* <div className="modal fade" id={props.movie.id} >
                    <h3>{props.movie.nome}</h3>
                    <p><label>Ano: </label> {props.movie.anoDeLancamento}</p>
                    <p><label>Categoria: </label> {props.movie.categoria}</p>
                    <p><label>Sinopse: </label> {props.movie.sinopse}</p>
                    <p><label>Duração: </label> {props.movie.duracao}</p>
                    <p><label>Avaliação: </label> {props.movie.avaliacao}</p>
                    <p><label>Links: </label> {props.movie.link}</p>
                </div> */}
            </div>
        </>
    )
}

export default MovieCard;
