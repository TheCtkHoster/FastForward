import BypassDefinition from './BypassDefinition.js';

export default class Filedm extends BypassDefinition {
  constructor() {
    super();
  }

  execute() {
    const sweetAlertScript = document.createElement('script');
    sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.6.6/dist/sweetalert2.all.min.js';
    document.head.appendChild(sweetAlertScript);

    sweetAlertScript.onload = function () {
      const dlButton = document.querySelector('a#dlbutton');

      if (dlButton) {
        const hrefValue = dlButton.getAttribute('href');

        if (hrefValue) {
          window.open(`https://filedm.com/${hrefValue}`, '_blank');
          Swal.fire({
            title: "Cancel the file you downloaded",
            text: "Enter the 5-digit number from the canceled executable file's name (found after the underscore before .exe):",
            input: 'text',
            inputPlaceholder: 'Type here...',
            showCancelButton: true,
            confirmButtonText: 'Submit'
          }).then((result) => {
            if (result.isConfirmed) {
              const userInput = result.value;
              Swal.fire({
                title: 'Click OK to redirect to your download!',
                icon: 'info',
                showConfirmButton: true
              }).then(() => {
                document.write(`http://cdn.directfiledl.com/getfile?id=${userInput}`);
                window.location.replace(document.body.textContent);
                setTimeout(function () {
                  window.location.href = "https://pastebin.com/raw/MveJaqKn";
                }, 2000);
              });
            } else {
              window.open("https://pastebin.com/raw/zd84dCKW", "_blank");
            }
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Could not download the file. Please try refreshing the page.',
            icon: 'error',
            showConfirmButton: true
          });
        }
      }
    };
  }
}

export const matches = ['filedm.com'];
