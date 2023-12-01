import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const Root = styled('div')(
  ({ theme }) => `
  color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
  font-size: 14px;
`
);

const Label = styled('label')`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled('div')(
  ({ theme }) => `
  width: 500px;
  border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
  }

  &.focused {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'};
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function SecondForm() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [selectedFile, setSelectedFile] = React.useState(null);

  const { getRootProps, getInputLabelProps, getInputProps, getTagProps, getListboxProps, getOptionProps, groupedOptions, value, focused, setAnchorEl } = useAutocomplete({
    id: 'customized-hook-demo',
    multiple: true,
    options: chooseSkills,
    getOptionLabel: (option) => option.title,
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Pengalaman & Skill
      </Typography>
      <Typography variant="h6" gutterBottom>
        Silahkan Lengkapi Data Pendukung Anda
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{ paddingTop: '20px' }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label"> Apakah punya pengalaman mengajar sebelumnya?</FormLabel>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '180px' }}>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  <FormControlLabel value="ya" control={<Radio />} label="Ya" />
                  <FormControlLabel value="tidak" control={<Radio />} label="Tidak" />
                </RadioGroup>
              </div>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Root>
            <div {...getRootProps()}>
              <Label {...getInputLabelProps()}>Skill Yang Anda Miliki</Label>
              <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                {value.map((option, index) => (
                  <StyledTag label={option.title} {...getTagProps({ index })} />
                ))}
                <input {...getInputProps()} />
              </InputWrapper>
            </div>
            {groupedOptions.length > 0 ? (
              <Listbox {...getListboxProps()}>
                {groupedOptions.map((option, index) => (
                  <li {...getOptionProps({ option, index })}>
                    <span>{option.title}</span>
                    <CheckIcon fontSize="small" />
                  </li>
                ))}
              </Listbox>
            ) : null}
          </Root>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"> Dokumen Pendukung </FormLabel>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            {selectedFile && (
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                File terpilih: {selectedFile.name}
              </Typography>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const chooseSkills = [{ title: 'Front End' }, { title: 'Back End' }, { title: 'Fullstack Web' }, { title: 'UI/UX' }, { title: 'IT Consultant' }, { title: 'Bisnis Digital' }, { title: 'Lainnya' }];
