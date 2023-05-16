import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="socials">
          <a href="https://twitter.com/PassivefundsIn" target="_blank" rel="noopener noreferrer">
            <img
              className="twitter"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABBZ8p9SYIZ42RZH29oUr-EsJ66qcowmVgm1vL3_YzuYoV5JOfwpPmqxsPE58qeHl-ZU&usqp=CAU"
              alt="twitter"
            />
          </a>
        
          <Link to = '/blog'>
            <img
              className="publications"
              src="https://media.istockphoto.com/id/1256598250/vector/open-book-line-icon-education-concept-reading-sign-on-white-background-notebook-or-textbook.jpg?s=612x612&w=0&k=20&c=DyXCpFQ4yrQpS4nVrlv4ynU6om8I7E0I9DYN8apS0yU="
              alt="publications"
            />
          </Link>
          
          <Link to = '/about'>
            <img
              className="contacts"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRJgCii7XmtgDqTliN-6mv4xDDm7co8uXHg&usqp=CAU"
              alt="contacts"
            />
          </Link>
          <Link to= '/faq'>
          <img
              className="faq"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYsKlObc1Ewsk3XUcKPSshiS4uwYHZpG8GQ&usqp=CAU"
              alt="faq"
            />
          </Link>
          <Link to='/jxfunds/chat'>
         <img className='chatIcon'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L6Q5rWwQGNk6sG2EC6jnKerEUIgnLgFTnA&usqp=CAU' alt=""/>
        </Link>
        </div>
        <h5 className="footerTag">@Jx-FUNDS</h5>
      </div>
    </>
  );
};

export default Footer;
