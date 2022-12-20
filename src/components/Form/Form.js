import { nanoid } from 'nanoid';
import { Button, FormContact, Input, Label } from "./Form.styled";
import { useDispatch } from 'react-redux';
import { addNewCotact } from 'redux/phoneBookSlice';


const idInputName = nanoid();
const idInputNamber = nanoid();




export const ContactForm = () =>{
    const dispatch  = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();

        const name = e.currentTarget.elements.name.value;
        const number = e.currentTarget.elements.number.value;

        dispatch(addNewCotact({name, number})); 
    };

    
   
    return(
        <FormContact onSubmit={handleSubmit}>
                    <Label htmlFor={idInputName}>
                    Name  
                    </Label>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required

                        id={idInputName}
                        />

                        <Label htmlFor={idInputNamber}>
                            Namber  
                        </Label>
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required

                            id={idInputNamber}
                            />

                        <Button  type="submit">Add Contact</Button>
                </FormContact>
        )
}

    