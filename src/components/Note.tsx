import { NoteObject } from "../models/note";
import { Card, CardContent, Box, Typography, Button, styled } from '@mui/material';

interface INoteProps {
    note: NoteObject,
    deleteNote: (id: number) => void
}

const StyledCard = styled(Card)`
    width: 400px;
    margin: 20px;
    border-radius: 15px; /* Rounded corners */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
    transition: transform 0.2s ease-in-out; /* Smooth transform on hover */
    
    &:hover {
        transform: translateY(-5px); /* Slight lift on hover */
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 10px; /* Spacing between elements */

    & > button {
        align-self: flex-end; /* Align button to the right */
        border: 1px solid #000;
        background: #fff; 
        padding: 5px 15px; /* Adjusted padding */
        border-radius: 5px; /* Rounded corners for button */
        cursor: pointer;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

        &:hover {
            background: #f0f0f0; /* Light grey on hover */
            color: #000; /* Text color change on hover */
        }
    }
`;

const StyledTypographyTitle = styled(Typography)`
    font-weight: bold;
    color: #333; /* Dark color for title */
    margin-bottom: 8px;
`;

const StyledTypographyText = styled(Typography)`
    color: #555; /* Medium color for text */
    line-height: 1.5; /* Improved readability */
    margin-bottom: 12px;
`;

const StyledTypographyDate = styled(Typography)`
    color: #777; /* Light color for date */
    font-size: 0.875rem; /* Smaller font size */
`;

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
    return (
        <StyledCard style={{ backgroundColor: note.color }}>
            <CardContent>
                <Wrapper>
                    <StyledTypographyTitle variant="h4" gutterBottom>{note.title}</StyledTypographyTitle>
                    <StyledTypographyText variant="body1" paragraph>{note.text}</StyledTypographyText>
                    <StyledTypographyDate variant="caption">{note.date}</StyledTypographyDate>
                    <Button variant="outlined" onClick={() => deleteNote(note.id)}>Delete</Button>
                </Wrapper>
            </CardContent>
        </StyledCard>
    );
}

export default Note;
