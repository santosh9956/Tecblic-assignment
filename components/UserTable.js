import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className={styles.tableWrapper}>
      <Table>
        <Thead>
          <Tr>
            <Th>User ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody className={styles.tableItemWrapper}>
          {users?.length > 0 && users?.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                <Button style={{ marginRight: '1rem' }} colorScheme="teal" onClick={() => onEdit(user)}>
                  Edit
                </Button>
                <Button colorScheme="red" onClick={() => onDelete(user.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          )) 
        }
        </Tbody>
      </Table>
    </div>
  );
};

export default UserTable;
