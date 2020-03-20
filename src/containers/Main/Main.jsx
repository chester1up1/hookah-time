import React,{useState} from 'react';
import logo from '../../img/logo.svg'
import item1 from '../../img/item1.svg'
import item2 from '../../img/item2.svg'
import item3 from '../../img/item3.svg'
import item4 from '../../img/item4.svg'
import item5 from '../../img/item5.svg'
import item6 from '../../img/item6.svg'
import instagram from '../../img/instagram.svg'
import telegram from '../../img/telegram.svg'
import facebook from '../../img/facebook.svg'
import x from '../../img/x.svg'
import ok from '../../img/ok.svg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css'

export const Main = () =>{
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState(false);
  const toggle = () => setModal(!modal);
  const goOrder = () => {
    setOrder(!order);
    setModal(false);
  }
  return(
    <div className='all'>
      <div className='Main'>
        <div className='Header'>
          <img className='logo' src={logo} alt='logo'/>
          <p className='Title'>КАЛЬЯН НА ВИНІС</p>
          <p className='Text'>СМАЧНИЙ ТА ДИМНИЙ КАЛЬЯН У ТВОЄМУ МІСТІ</p>
        </div>
        <div className='Services'>
          <div className='ServicesBody'>
            <p className='Title'>НАШІ ПОСЛУГИ ДОСТАВКИ КАЛЬЯНІВ</p>
            <div className='Items'>
              <div className='item'>
                <p>НА ВАШЕ СВЯТО</p>
                <img src={item1} alt='item'/>
              </div>
              <div className='item'>
                <p>ДО ВАШОЇ ОСЕЛІ</p>
                <img src={item2} alt='item'/>
              </div>
              <div className='item'>
                <p>НА ПРИРОДУ</p>
                <img src={item3} alt='item'/>
              </div>
            </div>
          </div>
        </div>
        <div className='Services'>
          <div className='ServicesBody'>
            <p className='Title'>ВЕЛИКИЙ АСОРТИМЕНТ </p>
            <div className='Items'>
              <div className='item'>
                <p>КАЛЬЯНІВ</p>
                <img src={item4} alt='item'/>
              </div>
              <div className='item'>
                <p>ТАБАКА</p>
                <img src={item5} alt='item'/>
              </div>
              <div className='item'>
                <p>ФРУКТОВИХ ЧАШ</p>
                <img src={item6} alt='item'/>
              </div>
            </div>
          </div>
        </div>
        <div className='buttonBox'>
          <Button className='btn_label' color="success" onClick={toggle}>
            <p>ЗАМОВИТИ</p>
          </Button>
          <Modal isOpen={modal} toggle={toggle} className='orderModal'>
            <ModalBody>
              <div>
                <img className='x_icon' src={x} alt="close" onClick={toggle}/>
                <p className='modalTitle '>контакти</p>
                <p className='modalTitleText'>заповіть форму нище</p>
              </div>
              <div className='modalBody'>
                <div className='modalItem'>
                  <p>І’мя :</p>
                  <input type='text' placeholder='введіть ім’я'/>
                </div>
                <div className='modalItem'>
                  <p>E-mail :</p>
                  <input type='text'  placeholder='введіть E-mail'/>
                </div>
                <div className='modalItem'>
                  <p>Телефон :</p>
                  <input type='text'  placeholder='введіть номер телефона'/>
                </div>
              </div>
              <div className='modalBtnBox'>
                <Button color="success" className="modalBtn" onClick={goOrder}>
                  <p>
                    ЗАМОВИТИ
                  </p>
                </Button>
              </div>
            </ModalBody>
          </Modal>
          <Modal isOpen={order} toggle={goOrder} className='orderGoModal'>
            <ModalBody className='orderGoModalBody'>
              <img className='x_icon_order' src={x} alt="close" onClick={goOrder}/>
              <p className='goOrderText'>Ваш запит в обробці.<br/>Очікуйте дзвінка нашого <br/> менеджера</p>
              <img src={ok} alt='okay' className='ok_icon' onClick={goOrder}/>
            </ModalBody>
          </Modal>
        </div>
        <div className='footer'>
          <div className='footer_item'> 
            <p className='title'>НАШІ КОНТАКТИ</p>
            <p>+(380) 681709599</p>
            <p>+(380) 735474455</p>
            <p>MYDILIOCAT@GMAIL.COM</p>
          </div>
          <div className='footer_item'> 
            <a href='https://www.instagram.com/andrewmilashka/' target='blank'><img className='icon' src={instagram} alt='instagram'/></a>
            <img className='icon' src={telegram} alt='telegram'/>
            <img className='icon' src={facebook} alt='facebook'/>
          </div>
          <div className='footer_item'> 
            <p>М.ДРОГОБИЧ ВУЛ П.ОРЛИКА 7</p>
          </div>
        </div>
      </div>
    </div>
  )
}