import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import classes from './moviecard.module.css';

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
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
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
