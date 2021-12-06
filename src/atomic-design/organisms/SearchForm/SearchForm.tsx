import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { FaSearch } from 'react-icons/all';
import './SearchForm.scss';

interface IProps {
  onSubmit: (search?: string) => void;
  className?: string;
}

const SearchForm = ({ onSubmit, className }: IProps) => {
  const [search, setSearch] = useState<string>();

  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const emitSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(search);
    },
    [search],
  );

  return (
    <Form onSubmit={emitSubmit} className={className}>
      <Stack direction="horizontal" gap={3}>
        <Form.Label className="visually-hidden">Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search all the GIFs!!!"
          onChange={onChangeSearch}
        />

        <Button className="search-form__button" variant="info" type="submit">
          <FaSearch className="search-form__icon" />
          <span className="visually-hidden">Search</span>
        </Button>
      </Stack>
    </Form>
  );
};

export default SearchForm;
