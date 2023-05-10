
import { AppBar, IconButton, Toolbar, Button, Grid, Typography, TextField } from '@mui/material';
import { SaveOutlined, UploadOutlined, DeleteOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startSaveNotes, startUploadingFiles } from '../../store/journal';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef()

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            MySwal.fire({ title: 'Nota actualizada', html: messageSaved, icon: 'success' });
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNotes());
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    }

    const onDelete = () => {
        dispatch(startDeletingNote());
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography
                    fontSize={39} fontWeight='light'>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>

                <input
                    type='file'
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }} />

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>


                <Button
                    color='primary'
                    onClick={onSaveNote}
                    sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label='Título'
                    value={title}
                    name='title'
                    onChange={onInputChange}
                    sx={{ border: 'none', mb: 1 }} />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Qué sucedió hoy?'
                    minRows={5}
                    value={body}
                    name='body'
                    onChange={onInputChange} />
            </Grid>

            <Grid
                container
                jutifyContent='end'>
                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color='error'>
                    <DeleteOutlined />
                    Borrar
                </Button>
            </Grid>

            {/* Image gallery */}
            <ImageGallery
                images={note.imageUrls} />

        </Grid>
    )
}
