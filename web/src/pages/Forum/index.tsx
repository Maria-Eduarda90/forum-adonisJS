import { Comments } from "../../components/Comments";
import { NavBar } from "../../components/NavBar";
import { SendCommentForm } from "../../components/SendCommentForm";

export function Forum(){
    return(
        <>
            <NavBar/>
            <SendCommentForm/>
            <Comments name="Meyh Mary" email="MeyhMary@gmail.com" >
                Call of duty Black Ops melho jogo!!! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Comments>
            <Comments name="Meyh Mary" email="MeyhMary@gmail.com" avatar="https://github.com/Maria-Eduarda90.png">
                Call of duty Black Ops melho jogo!!! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Comments>
            <Comments name="Meyh Mary" email="MeyhMary@gmail.com" avatar="https://github.com/Maria-Eduarda90.png">
                Call of duty Black Ops melho jogo!!! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Comments>
            <Comments name="Meyh Mary" email="MeyhMary@gmail.com" avatar="https://github.com/Maria-Eduarda90.png">
                Call of duty Black Ops melho jogo!!! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Comments>
        </>
    );
}