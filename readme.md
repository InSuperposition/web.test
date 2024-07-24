# Based.CSS

CSS custom properties (variables) allow for declaring relationships in values.

- calculating offsets

## Naming conventions

### CSS custom properties / variables

the convention is inspired by B-E-M styntax

`--root_element_name` - a **root** element is similar to block or a component name

1. use `snake_case` for root (block), descendant elements
   - `button_input`, `text_input`, `date_time_input`
   - CSS attributes - `--border_radius`
   - User-defined states like `is_visible` `has_value`

1. `--root__***` - the `__` prefix indicates an element which is a nested descendant, pseudo element or in the shadow DOM.
   - `--root__psuedo_element`

1. `--root_element--***` - the `--` prefix indicates a state and/or CSS style attribute
   - `--root--disabled--hover`
   - `--root__shadow_child--border_radius`
