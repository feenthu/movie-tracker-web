import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'
import { Plus, Download, ArrowRight, Star, Heart, Search } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and icon support. Built on Radix UI primitives for accessibility and customization.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'subtle', 'destructive', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    leftIcon: {
      control: false,
      description: 'Icon to display on the left side of the button',
    },
    rightIcon: {
      control: false,
      description: 'Icon to display on the right side of the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner and disables the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button',
    },
    children: {
      control: { type: 'text' },
      description: 'Button content',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// Variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
      <div className="w-full text-center mb-4">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Button Variants</h3>
        <p className="text-sm text-slate-600">Explore different visual styles for various use cases</p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center w-full">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button variants for various use cases. Primary for main actions, Secondary for supporting actions, Ghost for minimal styling, and Destructive for dangerous actions.',
      },
    },
  },
}

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Button Sizes</h3>
        <p className="text-sm text-slate-600">Three sizes to fit different layouts and hierarchies</p>
      </div>
      <div className="flex items-end gap-4">
        <div className="text-center">
          <Button size="sm" variant="primary">Small</Button>
          <p className="text-xs text-slate-500 mt-2">32px height</p>
        </div>
        <div className="text-center">
          <Button size="md" variant="primary">Medium</Button>
          <p className="text-xs text-slate-500 mt-2">40px height</p>
        </div>
        <div className="text-center">
          <Button size="lg" variant="primary">Large</Button>
          <p className="text-xs text-slate-500 mt-2">44px height</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three size options to accommodate different layouts. Small for compact spaces, Medium for general use, and Large for prominent actions.',
      },
    },
  },
}

// With Icons showcase
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-bl from-emerald-50 to-cyan-50 rounded-xl">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Buttons with Icons</h3>
        <p className="text-sm text-slate-600">Enhance buttons with meaningful icons for better UX</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-slate-700 mb-3">Left Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button leftIcon={<Plus />}>Add Item</Button>
            <Button leftIcon={<Download />} variant="secondary">Download</Button>
            <Button leftIcon={<Search />} variant="ghost">Search</Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-700 mb-3">Right Icons</h4>
          <div className="flex flex-wrap gap-3">
            <Button rightIcon={<ArrowRight />}>Continue</Button>
            <Button rightIcon={<ArrowRight />} variant="link">Learn more</Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-700 mb-3">Movie-Specific Actions</h4>
          <div className="flex flex-wrap gap-3">
            <Button leftIcon={<Star />} variant="secondary">Rate Movie</Button>
            <Button leftIcon={<Heart />} variant="subtle">Add to Favorites</Button>
            <Button leftIcon={<Plus />} variant="primary">Add to Watchlist</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include icons on the left or right side. Icons should be meaningful and help users understand the action. Perfect for movie-related actions like rating, favoriting, and adding to watchlists.',
      },
    },
  },
}

// States showcase
export const States: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-tr from-amber-50 to-orange-50 rounded-xl">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Button States</h3>
        <p className="text-sm text-slate-600">Different states for various interaction scenarios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center space-y-3">
          <h4 className="text-sm font-medium text-slate-700">Normal State</h4>
          <Button>Default Button</Button>
          <p className="text-xs text-slate-500">Ready for interaction</p>
        </div>

        <div className="text-center space-y-3">
          <h4 className="text-sm font-medium text-slate-700">Loading State</h4>
          <Button loading>Processing...</Button>
          <p className="text-xs text-slate-500">Shows spinner, prevents clicks</p>
        </div>

        <div className="text-center space-y-3">
          <h4 className="text-sm font-medium text-slate-700">Disabled State</h4>
          <Button disabled>Disabled</Button>
          <p className="text-xs text-slate-500">Cannot be interacted with</p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <h4 className="text-sm font-medium text-slate-700 mb-3">Hover & Focus States</h4>
        <div className="flex flex-wrap gap-3">
          <Button className="hover:shadow-lg transition-all duration-200">Hover for Effect</Button>
          <Button variant="secondary" className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Focus with Tab</Button>
        </div>
        <p className="text-xs text-slate-500 mt-2">Try hovering and tabbing to see interactive states</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons have different states to provide feedback during interactions. Loading state prevents multiple submissions, disabled state indicates unavailable actions, and hover/focus states provide visual feedback.',
      },
    },
  },
}

// Real-world examples
export const MovieActions: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto space-y-8 p-8 bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">Movie App Use Cases</h3>
        <p className="text-sm text-slate-600">Real-world button usage in movie tracking applications</p>
      </div>

      <div className="space-y-6">
        {/* Movie Card Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-medium text-slate-800 mb-4">Movie Card Actions</h4>
          <div className="flex flex-wrap gap-3">
            <Button leftIcon={<Plus />} size="sm">Watchlist</Button>
            <Button leftIcon={<Star />} variant="secondary" size="sm">Rate</Button>
            <Button leftIcon={<Heart />} variant="ghost" size="sm">Favorite</Button>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-medium text-slate-800 mb-4">Navigation & Flow</h4>
          <div className="flex flex-wrap gap-3">
            <Button rightIcon={<ArrowRight />}>View Details</Button>
            <Button variant="secondary">Back to List</Button>
            <Button variant="link">Skip for Now</Button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h4 className="font-medium text-slate-800 mb-4">Form & Modal Actions</h4>
          <div className="flex flex-wrap gap-3">
            <Button loading>Saving Review...</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="destructive" size="sm">Delete Review</Button>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of how buttons are used in real movie tracking scenarios. Each context requires different button variants and sizes to create proper visual hierarchy and user experience.',
      },
    },
  },
}

// Interactive playground
export const Playground: Story = {
  args: {
    children: 'Playground Button',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Experiment with different button properties using the controls below. This is the interactive playground for testing all button configurations.',
      },
    },
  },
}