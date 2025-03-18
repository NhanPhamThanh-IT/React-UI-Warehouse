
/**
 * This file contains the card templates.
 * Each card template is an object with the following properties:
 * - title: the title of the card
 * - description: a brief description of the card
 * - code: the code snippet for the card
 * - preview: the JSX code for the card preview
 * - category: the category of the card
 * The cards array contains all the card templates that will be displayed on the Templates page.
 * Feel free to add, remove, or modify the card templates as needed.
 * @see https://mui.com/components/cards/
 * @see https://mui.com/components/card-actions/
 * @see https://mui.com/components/card-header/
 * @see https://mui.com/components/card-media/
 * @see https://mui.com/components/card-content/
 * @see https://mui.com/components/card
 * @see https://mui.com/components/typography/
 * @see https://mui.com/components/button
 * @see https://mui.com/system/card/
 * @see https://mui.com/system/card-content/
 * @see https://mui.com/system/card-media/
 * @see https://mui.com/system/card-actions/
 * @see https://mui.com/system/typography/
 */
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

export const cards = [
  {
    title: 'Basic Card',
    description: 'A simple card with an image, title, and description.',
    code: `<Card>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team meeting"
            />
            <CardContent>
              <Typography variant="h6">Card Title</Typography>
              <Typography variant="body2" color="textSecondary">
                This is a sample card description.
              </Typography>
            </CardContent>
          </Card>`,
    preview: (
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Team meeting"
        />
        <CardContent>
          <Typography variant="h6">Card Title</Typography>
          <Typography variant="body2" color="textSecondary">
            This is a sample card description.
          </Typography>
        </CardContent>
      </Card>
    ),
    category: 'Cards'
  },
  {
    title: 'Card with Actions',
    description: 'A card with an image, title, description, and action buttons.',
    code: `<Card>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              alt="Laptop setup"
            />
            <CardContent>
              <Typography variant="h6">Interactive Card</Typography>
              <Typography variant="body2" color="textSecondary">
                This card includes actions.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>`,
    preview: (
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
          alt="Laptop setup"
        />
        <CardContent>
          <Typography variant="h6">Interactive Card</Typography>
          <Typography variant="body2" color="textSecondary">
            This card includes actions.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    ),
    category: 'Cards'
  },
  {
    title: 'Full-Width Card',
    description: 'A card that spans full width with additional details.',
    code: `<Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Coding workspace"
            />
            <CardContent>
              <Typography variant="h6">Full-Width Card</Typography>
              <Typography variant="body2" color="textSecondary">
                Ideal for layouts that require extended content.
              </Typography>
            </CardContent>
          </Card>`,
    preview: (
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Coding workspace"
        />
        <CardContent>
          <Typography variant="h6">Full-Width Card</Typography>
          <Typography variant="body2" color="textSecondary">
            Ideal for layouts that require extended content.
          </Typography>
        </CardContent>
      </Card>
    ),
    category: 'Cards'
  },
  {
    title: 'Outlined Card',
    description: 'A card with an outlined border.',
    code: `<Card variant="outlined">
  <CardContent>
    <Typography variant="h6">Outlined Card</Typography>
    <Typography variant="body2" color="textSecondary">
      This card has an outlined style.
    </Typography>
  </CardContent>
</Card>`,
    preview: (
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">Outlined Card</Typography>
          <Typography variant="body2" color="textSecondary">
            This card has an outlined style.
          </Typography>
        </CardContent>
      </Card>
    ),
    category: 'Cards'
  }
];
