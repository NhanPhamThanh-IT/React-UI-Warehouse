/**
 * @module SearchBar
 * @description
 * A search input field with a clear button, utilizing Material-UI components.
 * - [TextField](https://mui.com/components/text-fields/)
 * - [InputAdornment](https://mui.com/components/text-fields/#adornments)
 * - [Paper](https://mui.com/components/paper/)
 * - [IconButton](https://mui.com/components/icon-button/)
 * - [Search](https://lucide.dev/icons/#search)
 * - [X](https://lucide.dev/icons/#x)
 * - [useState](https://reactjs.org/docs/hooks-state.html)
 * - [searchBarStyles](search-bar-styles)
 * - [TextField](https://mui.com/components/text-fields/)
 * - [InputAdornment](https://mui.com/components/text-fields/#adornments)
 * - [Paper](https://mui.com/components/paper/)
 * - [IconButton](https://mui.com/components/icon-button/)
 * - [Search](https://lucide.dev/icons/#search)
 * - [X](https://lucide.dev/icons/#x)
 * - [useState](https://reactjs.org/docs/hooks-state.html)
 * - [searchBarStyles](search-bar-styles)
 * - [TextField](https://mui.com/components/text-fields/)
 * - [InputAdornment](https://mui.com/components/text-fields/#adornments)
 * - [Paper](https://mui.com/components/paper/)
 * - [IconButton](https://mui.com/components/icon-button/)
 * - [Search](https://lucide.dev/icons/#search)
 * - [X](https://lucide.dev/icons/#x)
 * - [useState](https://reactjs.org/docs/hooks-state.html)
 */
import { TextField, InputAdornment, Paper, IconButton } from "@mui/material";
import { Search, X } from "lucide-react";
import { useState } from "react";

/**
 * @module SearchBar
 * @description
 * A search input field with a clear button, utilizing Material-UI components.
 */
import { searchBarStyles } from "./styles";

/**
 * SearchBar Component
 * 
 * A search input field with a clear button, utilizing Material-UI components.
 *
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 */
export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    /**
     * Clears the search input field.
     */
    const handleClear = () => {
        setSearchTerm("");
    };

    return (
        <Paper fullWidth sx={searchBarStyles.paper}>
            <TextField
                fullWidth
                variant="standard"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search size={20} />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        searchTerm && (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClear} size="small">
                                    <X size={20} />
                                </IconButton>
                            </InputAdornment>
                        )
                    ),
                    disableUnderline: true,
                }}
                sx={searchBarStyles.textField}
            />
        </Paper>
    );
};
