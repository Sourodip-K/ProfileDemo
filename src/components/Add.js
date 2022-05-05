import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  ToggleButtonGroup,
  Tooltip,
} from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import { EmojiEmotions } from '@mui/icons-material'
import { VideoCameraBack } from '@mui/icons-material'
import { Image } from '@mui/icons-material'
import { PersonAdd } from '@mui/icons-material'
import { DateRange } from '@mui/icons-material'

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

const Add = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Create a Post"
        sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% - 25px)', md: 30 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
        onClose={(e) => setOpen(false)}
      >
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography color="gray" textAlign="center" variant="h6" component="h2">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://64.media.tumblr.com/9d26a4bf27480aa4e2579a6238671666/d9fcda279fb1d1ae-4b/s540x810/511b2677fa623fa19904edd00791a46bea94e8b7.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              SRK
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="secondary" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: '100px' }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
