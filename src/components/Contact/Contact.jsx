import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import { MediumText } from "../Text/Text";
import { ContactContainer } from "./style";
import Snack from '../Snacks/Snack'

const Contact = () => {
  const { t } = useTranslation();



  const [form, setForm] = useState({
    name:'',
    phone:'+998 ',
  });
  const [showNameError, setShowNameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false); // State for Snackbar



  const tgToken = "7091081477:AAEgwtR5RXVvLJaxwhT5ogVsmeni0b_Rs1Y";
  const chatId = "5511081391";

  const sendUserInfo = async () => {
    try {
      const { name, phone } = form;
      const message = `Name: ${name}%0APhone: ${phone}`; // Encode message text
      const url = `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${chatId}&text=${message}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to send message to Telegram bot.');
      }

      console.log('Message sent successfully to Telegram bot.');
      resetForm();
      setSnackOpen(true);
    } catch (error) {
      console.error('Error occurred while sending message to Telegram bot:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (form.name.length < 4) {
      setShowNameError(true);
      return; 
    } else {
      setShowNameError(false);
    }

    if (form.phone.length < 13) {
      setShowPhoneError(true);
      return; 
    } else {
      setShowPhoneError(false);
    }
    sendUserInfo();
    
  };

  const resetForm = () => {
    setForm({
      name: '',
      phone: '+998 ',
    });
    setShowNameError(false);
    setShowPhoneError(false);
  };

  const handlePhoneChange = (e) => {
    let newValue = e.target.value;
    
    if (!newValue.startsWith('+998 ')) {
      newValue = '+998 ' + newValue;
    }
  
    if (newValue.length > 4) {
      newValue = newValue.substring(5).replace(/[^\d]+/g, ''); // Keep only numeric characters
      newValue = '+998 ' + newValue.substring(0, 9); // Limit phone number to 9 digits
    }
  
    setForm({ ...form, phone: newValue });
  };

  return (
    <>
      <Container>
        <ContactContainer id='contact' >
          <ContactContainer.Form 
          data-aos="flip-left"
          data-aos-duration="500"
          >
            <form onSubmit={handleSubmit}>
              <MediumText>{t('contact.formTitle')}</MediumText>
              <ContactContainer.Form.Input 
                onChange={(e) => setForm({...form, name:e.target.value})}
                value={form.name} 
                placeholder={t('contact.placeholderName')} 
                type="text"
                style={{ border: showNameError ? '1px solid red' : 'none' }}
              />
              {showNameError && (
                <p style={{ color: 'red', fontSize:'12px',marginTop:'5px' }}>{t('contact.errorName')}</p>
              )}
              <ContactContainer.Form.Input 
                onChange={handlePhoneChange}
                value={form.phone} 
                type="tel"
                pattern="[0-9]{9}" // Use pattern to restrict to 9 numeric characters
                placeholder={t('contact.placeholderPhone')} 
                style={{ border: showPhoneError ? '1px solid red' : 'none' }}
              />
              {showPhoneError && (
                <p style={{ color: 'red', fontSize:'12px',marginTop:'5px' }}>{t('contact.errorPhone')}</p>
              )}
              <Button type="submit" variant="contained" className="btn-send">
                {t('contact.submitButtonText')}
              </Button>
              <FormControl />
            </form>
          </ContactContainer.Form>
          <ContactContainer.Image
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="2000"
          data-aos-duration="3000"
          />
        </ContactContainer>
        {/* // Snack component */}
        <Snack open={snackOpen} setOpen={setSnackOpen} />
      </Container>
    </>
  );
};

export default Contact;
