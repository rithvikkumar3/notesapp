// import { useState } from "react";

// import { Box, InputBase, Button, styled, Typography } from "@mui/material";
// import { v4 as uuid } from 'uuid';

// import { NoteObject } from "../models/note";
// import { TITLE_LIMIT, TEXT_LIMIT } from "../constants/constant";

// const Container = styled(Box)`
//     & > * {
//         margin-right: 20px !important;
//         margin: 20px 0;
//     }
//     & > div > input[type="text"] {
//         border-bottom: 1px solid #111111;
//         opacity: 0.4;
//         width: 300px;
//         padding-right: 25px;
//     }
//     & > div > input[type="color"] {
//         position: relative;
//         bottom: -10px;
//         width: 40px;
//         height: 30px;
//     }
//     & > span {
//         font-size: 10px;
//         position: relative;
//         right: 40px;
//     }
// `;

// const Error = styled(Typography)`
//     background: red;
//     color: #fff;
//     padding: 10px;
//     width: 50%;
// `

// const defaultObj = {
//     id: 0, 
//     title: '',
//     text: '',
//     color: '',
//     date: (new Date().toLocaleString()).toString()
// } // Date cannot be used directly as a React Child.

// interface ICreateNoteProps {
//     addNote: (note: NoteObject) => void
// }

// const CreateNote: React.FC<ICreateNoteProps> = ({ addNote }) => {

//     const [note, setNote] = useState<NoteObject>(defaultObj);
//     const [error, setError] = useState<string>('');

//     const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
//         if(error) 
//             setError('');
        
//         setNote({ ...note, [e.target.name]: e.target.value });
//     }

//     const onCreateNote = () => {
//         if (!note.title && !note.text) {
//             setError('All fields are mandatory');
//             return;
//         }

//         addNote({ ...note, id: uuid() });
//         setNote(defaultObj);
//     }

//     return (
//         <Container>
//             <InputBase 
//                 name="title" 
//                 value={note.title} 
//                 onChange={(e) => onValueChange(e)} 
//                 placeholder="Title" 
//                 inputProps={{
//                     maxLength: TITLE_LIMIT
//                 }}
//             />
//             <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>
//             <InputBase 
//                 name="text" 
//                 value={note.text} 
//                 onChange={(e) => onValueChange(e)} 
//                 placeholder="Details"
//                 inputProps={{
//                     maxLength: TEXT_LIMIT
//                 }}
//             />
//             <Box component="span">{note.text.length}/{TEXT_LIMIT}</Box>
//             <InputBase 
//                 type="color"
//                 name="color"
//                 defaultValue={'#F5F5F5'}
//                 onChange={(e) => onValueChange(e)} 
//                 placeholder="Choose color" 
//             />
//             <Button 
//                 variant="outlined"
//                 onClick={() => onCreateNote()}>
//                     Create
//             </Button>
//             { error && <Error>{error}</Error> }
//         </Container>
//     )
// }

// export default CreateNote;
import { useState } from "react";
import { Box, InputBase, Button, styled, Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';

import { NoteObject } from "../models/note";
import { TITLE_LIMIT, TEXT_LIMIT } from "../constants/constant";

const Container = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1), // Reduced padding
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > *': {
        margin: '5px 0', // Reduced margin
    },
    '& > div > input[type="text"]': {
        borderBottom: '1px solid #111111',
        opacity: 0.8,
        width: '300px',
        paddingRight: '25px',
    },
    '& > div > input[type="color"]': {
        width: '40px',
        height: '30px',
    },
    '& > span': {
        fontSize: '12px',
        marginLeft: '10px',
    }
}));

const Error = styled(Typography)(({ theme }) => ({
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: theme.spacing(1),
    borderRadius: '4px',
    width: 'fit-content',
}));

const defaultObj = {
    id: 0,
    title: '',
    text: '',
    color: '#FFFFFF', // Default color set to white
    date: new Date().toLocaleString()
};

interface ICreateNoteProps {
    addNote: (note: NoteObject) => void;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNote }) => {
    const [note, setNote] = useState<NoteObject>(defaultObj);
    const [error, setError] = useState<string>('');

    const onValueChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (error) setError('');
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    const onCreateNote = () => {
        if (!note.title && !note.text) {
            setError('All fields are mandatory');
            return;
        }
        addNote({ ...note, id: uuid() });
        setNote(defaultObj);
    };

    return (
        <Container>
            <InputBase
                name="title"
                value={note.title}
                onChange={(e) => onValueChange(e)}
                placeholder="Title"
                inputProps={{ maxLength: TITLE_LIMIT }}
            />
            <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>
            <InputBase
                name="text"
                value={note.text}
                onChange={(e) => onValueChange(e)}
                placeholder="Details"
                inputProps={{ maxLength: TEXT_LIMIT }}
            />
            <Box component="span">{note.text.length}/{TEXT_LIMIT}</Box>
            <InputBase
                type="color"
                name="color"
                value={note.color}
                onChange={(e) => onValueChange(e)}
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={onCreateNote}>
                Create
            </Button>
            {error && <Error>{error}</Error>}
        </Container>
    );
};

export default CreateNote;
