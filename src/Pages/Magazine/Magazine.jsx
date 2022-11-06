import React from 'react'
import "./Magazine.scss"
import "../../Components/Modal/ModalComp"
import ModalComp from '../../Components/Modal/ModalComp'

const Magazine = () => {
    return (
        <form className="magazine container">
            <div className="city d-flex">
                <select className='form-select'>
                    <option value="Sam">Samarkand</option>
                    <option value="Tosh">Tashkent</option>
                    <option value="Bukh">Bukhara</option>
                    <option value="And">Andijan</option>
                    <option value="Nav">Navaiy</option>
                </select>
                <select className='form-select'>
                    <option value="Sam">Tayloq</option>
                    <option value="Tosh">Nurobod</option>
                    <option value="Bukh">Oqdaryo</option>
                    <option value="And">Narpay</option>
                    <option value="Nav">Paxtachi</option>
                </select>
            </div>
            <div className="maps">
                <iframe className='map' height="300"  id="gmap_canvas" src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=%20Samarkand+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
            </div>

            <div className="users">
                <label for="basic-url" className="form-label">Телефонный номер</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" placeholder='+998 93 123 45 67' />
                </div>

                <label for="basic-url2" className="form-label">Email-адрес</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="basic-url2" aria-describedby="basic-addon3" placeholder='example@gmail.com' />
                </div>

                <label for="basic-url3" className="form-label">Контактный лицо</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="basic-url3" aria-describedby="basic-addon3" placeholder='Ravshan ...' />
                </div>

                <ModalComp />
                
            </div>
        </form>
    )
}

export default Magazine