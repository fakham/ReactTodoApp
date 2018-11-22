import React from 'react';
import Delete from '@material-ui/icons/Delete';
import { List, ListItem, ListItemText, Divider, Button } from '@material-ui/core';
import './ListItems.css';

const ListItems = (props) => {

    const {items, deleteItem} = props;
    const theItems = items.length ? (items.map( item => {
        return (
            <div key={item.id}>
                <List>
                    <ListItem className="item">
                        <ListItemText primary={item.id} />
                        <ListItemText primary={item.name} />
                        <ListItemText primary={item.priority} />
                        <ListItemText onClick={() => deleteItem(item.id)}>
                            <Button variant="outlined" color="secondary">
                                <Delete color="secondary" />
                            </Button>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </div>
        )
    } )) : (
        <p>No items!</p>
    )

    return (
        <div>
            {theItems}
        </div>
    )

}

export default ListItems;