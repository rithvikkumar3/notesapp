import { Box, Typography, styled } from '@mui/material';
import { NoteObject } from '../models/note';
import Note from './Note';

interface INotesProps {
    notes: NoteObject[],
    deleteNote: (id: number) => void
}

const NotesContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const NotesHeader = styled(Typography)`
    font-size: 1.8rem;
    font-weight: bold;
    color: #3f51b5;
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    /* Add a background gradient */
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    /* Add a nice shadow effect */
    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
    /* Add some padding and border radius */
    padding: 4px 140px;
    border-radius: 5px;
`

const NotesGrid = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const Notes: React.FunctionComponent<INotesProps> = ({ notes, deleteNote }) => {
    return (
        <NotesContainer>
            <NotesHeader variant="h5">My Notes</NotesHeader>
            <NotesGrid>
                {notes.map(note => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} />
                ))}
            </NotesGrid>
        </NotesContainer>
    );
}

export default Notes;
