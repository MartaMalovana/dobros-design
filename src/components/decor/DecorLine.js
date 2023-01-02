import { Decor, Decor1, Decor2, Decor3} from "./DecorLine.styled";

export default function DecorLine ({contacts, tablet, desktop}) {
    return (
        <Decor contacts={contacts} tablet={tablet} desktop={desktop}>
            <Decor1>
                <Decor2 />
                <Decor3 />
            </Decor1>
        </Decor>
    );
}