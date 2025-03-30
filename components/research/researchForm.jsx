'use client';
import FormfacadeEmbed from "@formfacade/embed-react";

export default function GoogleForm() {
    return(
<FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/103444691370887618546/form/1FAIpQLSftx1NWJ-6JTieExOzgZzbEiOp_Jp9efvLgBiebjr3A8yEThA/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
    )
}