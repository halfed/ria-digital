class ContactsApi {  
  static getAllContacts() {
  	//WE MIMIC AN API CALL HERE FOR INITIAL LIST, IF THIS WERE A REAL FORM WE WOULD HAVE APIS FOR ALL C.R.U.D PROCESSES
    const list = [{id:1525207676771, first_name:"Ed",last_name:"Wince",address:"755 South Lafayette Dr."},
			      {id:1525207680217, first_name:"Paul",last_name:"Webber",address:"599 Excalibur Dr."}];
	return list;
  }
}

export default ContactsApi; 