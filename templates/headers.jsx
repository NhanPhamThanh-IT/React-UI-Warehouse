/**
 * MUI Headers - Templates
 * A collection of reusable MUI headers for your projects
 * @see https://mui.com/components/app-bar/
 * @see https://mui.com/components/toolbar/
 * @see https://mui.com/components/typography/
 * @see https://mui.com/components/icon-button/
 * @see https://mui.com/components/button/
 * @see https://mui.com/components/input-base/
 * @see https://mui.com/components/badge/
 * @see https://mui.com/components/box/
 * @see https://mui.com/components/container/
 * @see https://mui.com/components/stack/
 * @see https://mui.com/system/app-bar/
 * @see https://mui.com/system/toolbar/
 * @see https://mui.com/system/typography/
 * @see https://mui.com/system/icon-button/
 * @see https://mui.com/system/button/
 * @see https://mui.com/system/input-base/
 * @see https://mui.com/system/badge/
 * @see https://mui.com/system/box/
 * @see https://mui.com/system/container/
 * @see https://mui.com/system/stack/
 * @see https://mui.com/system/alpha/
 * @see https://mui.com/system/colors/
 * @see https://mui.com/system/grid/
 * @see https://mui.com/system/palette/
 * @see https://mui.com/system/shadows/
 * @see https://mui.com/system/spacing/
 * @see https://mui.com/system/typography/
 * @see https://mui.com/system/borders/
 * @see https://mui.com/system/display/
 * @see https://mui.com/system/flexbox/
 * @see https://mui.com/system/positions/
 * @see https://mui.com/system/sizing/
 * @see https://mui.com/system/spacing/
 * @see https://mui.com/system/typography/
 * @see https://mui.com/system/z-index/
 * @see https://mui.com/system/breakpoints/
 */

import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    InputBase,
    Badge,
    Box,
    Container,
    Stack,
    alpha
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    AccountCircle,
    Home as HomeIcon,
    ShoppingCart as ShoppingCartIcon,
    Info as InfoIcon,
    ContactSupport as ContactIcon
} from '@mui/icons-material';

/**
 * A collection of reusable MUI headers for your projects
 */

export const headers = [
    {
        title: 'Modern Minimal Header',
        description: 'A clean and minimal header with elegant typography.',
        code: `<AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
  <Container maxWidth="lg">
    <Toolbar disableGutters>
      <Typography variant="h6" component="div" sx={{ color: 'text.primary', fontWeight: 600 }}>
        Minimal Header
      </Typography>
    </Toolbar>
  </Container>
</AppBar>`,
        preview: (
            <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography variant="h6" component="div" sx={{ color: 'text.primary', fontWeight: 600 }}>
                            Minimal Header
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        ),
        category: 'Headers'
    },
    {
        title: 'Navigation Header',
        description: 'A full-featured header with navigation menu and responsive design.',
        code: `<AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
  <Container maxWidth="lg">
    <Toolbar disableGutters>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, color: 'text.primary' }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ color: 'text.primary', flexGrow: 1 }}>
        Navigation Header
      </Typography>
      <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Button startIcon={<HomeIcon />} color="inherit" sx={{ color: 'text.primary' }}>
          Home
        </Button>
        <Button startIcon={<ShoppingCartIcon />} color="inherit" sx={{ color: 'text.primary' }}>
          Products
        </Button>
        <Button startIcon={<InfoIcon />} color="inherit" sx={{ color: 'text.primary' }}>
          About
        </Button>
        <Button startIcon={<ContactIcon />} color="inherit" sx={{ color: 'text.primary' }}>
          Contact
        </Button>
      </Stack>
    </Toolbar>
  </Container>
</AppBar>`,
        preview: (
            <AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, color: 'text.primary' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ color: 'text.primary', flexGrow: 1 }}>
                            Navigation Header
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button startIcon={<HomeIcon />} color="inherit" sx={{ color: 'text.primary' }}>
                                Home
                            </Button>
                            <Button startIcon={<ShoppingCartIcon />} color="inherit" sx={{ color: 'text.primary' }}>
                                Products
                            </Button>
                            <Button startIcon={<InfoIcon />} color="inherit" sx={{ color: 'text.primary' }}>
                                About
                            </Button>
                            <Button startIcon={<ContactIcon />} color="inherit" sx={{ color: 'text.primary' }}>
                                Contact
                            </Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        ),
        category: 'Headers'
    },
    {
        title: 'Modern Dashboard Header',
        description: 'A sophisticated header with search, notifications, and user profile.',
        code: `<AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
  <Container maxWidth="lg">
    <Toolbar disableGutters>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, color: 'text.primary' }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ color: 'text.primary', flexGrow: 1 }}>
        Dashboard
      </Typography>
      <Box sx={{ 
        position: 'relative',
        bgcolor: 'grey.100',
        borderRadius: 1,
        mr: 2,
        width: 300
      }}>
        <IconButton sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }}>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search..."
          sx={{
            pl: 6,
            pr: 2,
            py: 1,
            width: '100%'
          }}
        />
      </Box>
      <IconButton size="large" sx={{ color: 'text.primary' }}>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        sx={{ ml: 1, color: 'text.primary' }}
      >
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </Container>
</AppBar>`,
        preview: (
            <AppBar position="static" sx={{ bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, color: 'text.primary' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ color: 'text.primary', flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <Box sx={{
                            position: 'relative',
                            bgcolor: 'grey.100',
                            borderRadius: 1,
                            mr: 2,
                            width: 300
                        }}>
                            <IconButton sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }}>
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                placeholder="Search..."
                                sx={{
                                    pl: 6,
                                    pr: 2,
                                    py: 1,
                                    width: '100%'
                                }}
                            />
                        </Box>
                        <IconButton size="large" sx={{ color: 'text.primary' }}>
                            <Badge badgeContent={4} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            sx={{ ml: 1, color: 'text.primary' }}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        ),
        category: 'Headers'
    },
    {
        title: 'Gradient Header',
        description: 'A modern header with a beautiful gradient background.',
        code: `<AppBar 
  position="static" 
  sx={{ 
    background: 'linear-gradient(to right, #1976d2, #512da8)',
    boxShadow: 2 
  }}
>
  <Container maxWidth="lg">
    <Toolbar disableGutters>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        Gradient Header
      </Typography>
      <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Button color="inherit">Features</Button>
        <Button color="inherit">Pricing</Button>
        <Button color="inherit">Resources</Button>
      </Stack>
      <Box sx={{ ml: 2 }}>
        <Button color="inherit" sx={{ mr: 1 }}>Sign in</Button>
        <Button variant="contained" sx={{ bgcolor: 'white', color: '#1976d2', '&:hover': { bgcolor: alpha('#fff', 0.9) } }}>
          Get Started
        </Button>
      </Box>
    </Toolbar>
  </Container>
</AppBar>`,
        preview: (
            <AppBar
                position="static"
                sx={{
                    background: 'linear-gradient(to right, #1976d2, #512da8)',
                    boxShadow: 2
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            Gradient Header
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button color="inherit">Features</Button>
                            <Button color="inherit">Pricing</Button>
                            <Button color="inherit">Resources</Button>
                        </Stack>
                        <Box sx={{ ml: 2 }}>
                            <Button color="inherit" sx={{ mr: 1 }}>Sign in</Button>
                            <Button variant="contained" sx={{ bgcolor: 'white', color: '#1976d2', '&:hover': { bgcolor: alpha('#fff', 0.9) } }}>
                                Get Started
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        ),
        category: 'Headers'
    }
];