module.exports = {
  title: 'Profile topbars',
  label: 'Profile topbars',
  status: 'ready',
  tags: ['organism'],
  context: {
    _demo: {
      scripts:
        "document.addEventListener('DOMContentLoaded', function () { ECL.initExpandables(); });",
    },
    profile: {
      image: {
        src: '../../assets/demo_images/default_profile_image.png',
        alt: 'Example profile image',
      },
      expandable: {
        button: {
          label: 'See details',
          extra_classes:
            'ecl-expandable__button ecl-profile-topbar__pane-button',
          extra_attributes: [
            {
              name: 'aria-controls',
              value: 'ecl-profile-topbar__expandable-1',
            },
            { name: 'aria-expanded', value: 'false' },
            { name: 'id', value: 'ecl-profile-topbar__expandable-button-1' },
            { name: 'type', value: 'button' },
          ],
        },
        expandable_body: {
          extra_attributes: [
            {
              name: 'aria-hidden',
              value: 'true',
            },
            {
              name: 'aria-labelledby',
              value: 'ecl-profile-topbar__expandable-button-1',
            },
            { name: 'id', value: 'ecl-profile-topbar__expandable-1' },
            { name: 'class', value: 'ecl-profile-topbar__collapsible-area' },
          ],
        },
      },
    },
    context_nav: {
      label: 'Department',
      items: [
        {
          href: '#',
          label: 'Trade',
        },
        {
          href: '#',
          label: ' European Anti-Fraud Office',
        },
      ],
    },
  },
};
