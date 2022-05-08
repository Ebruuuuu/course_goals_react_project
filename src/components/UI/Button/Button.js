import React from 'react'

/* CSS modülleri sayesinde her component'e ayrı bir unique class ismi verilir.
Böylece proje boyutunun büyüdüğü durumlarda yaşanılan class ve component isimlerinin 
karıştırılması sonucundaki stil karışıklığının önüne geçilmiş olur.*/

// styles objesi CSS modülünden içeri aktarıldı.
import styles from './Button.module.css'

//styled-components yardımıyla sadece Button component'ine ait olan stil özellikleri oluşturulmuş oldu.
/*
const Button = styled.button`
  width: auto;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
` */
//CSS modülündeki "button" class'ı bir property olarak görülür.
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
