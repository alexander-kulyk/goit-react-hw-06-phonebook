import { useDispatch, useSelector } from "react-redux"
import { deleteContact } from "redux/phoneBookSlice";
import { ContactList, ItemsContact,DeleteBtn, Notification } from "./ContactList.styled"


export const Contact = () =>{
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
    const query = useSelector(state => state.filter.filter);

    
    const  getVisibleContact = () =>{

        const normalizeFilter = query.toLocaleLowerCase()
      
        return contacts.filter(({name})=>
            name.toLocaleLowerCase().includes(normalizeFilter))
      };
      
      const visibleContact = getVisibleContact();

    
    
    return(
        <ContactList>
          
            { contacts.length === 0
                ? <Notification>You have no contacts</Notification>
                : visibleContact.length === 0
                    ? <Notification>contact not found</Notification>
                    : visibleContact.map(({id, name, number}) =>(
                        <ItemsContact 
                        key={id}>{name}: {number} <DeleteBtn type="button" onClick={()=>dispatch(deleteContact({id}))}>delete</DeleteBtn>
                        </ItemsContact>
             
                    ))
            }
            
        </ContactList>
    )
}

