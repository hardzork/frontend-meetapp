import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { Container } from './styles';

export default function Banner() {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const ref = useRef();

  useEffect(() => {
    if (defaultValue) {
      const { id, url } = defaultValue;
      setFile(id);
      setPreview(url);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {preview ? (
          <img src={preview} alt="Banner" />
        ) : (
          <img
            src="https://static.thenounproject.com/png/396915-200.png"
            alt="Banner"
          />
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
