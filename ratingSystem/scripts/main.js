/* there are 5 labels named sequentially, from label-1 - label-5.

when user clicks a label, add class "active" to 
that label and all labels before it (i.e. w/ numbers smaller than it)

user clicks label-1 => class "active" gets added to label-1;
user clicks label-2 => class "active" gets added to label-2 and label-1;
user clicks label-3 => class "active" gets added to label-3, label-2 and label-1;
user clicks label-4 => class "active" gets added to label4-, label-3 label-2 and label-1;
user clicks label-5 => class "active" gets added to label-5, label-4, label-3, label-2 and label-1;

what if the user changes their mind? clicks label-5 and then label-3?

=> there should be a provision to remove class "active" from all labels before adding it to the given labels.

*/

const l1 = document.querySelector("#label-1");
const l2 = document.querySelector("#label-2");
const l3 = document.querySelector("#label-3");
const l4 = document.querySelector("#label-4");
const l5 = document.querySelector("#label-5");

const labelsArray = [l1, l2, l3, l4, l5];

l1.addEventListener('click', makeActive1);
l2.addEventListener('click', makeActive2);
l3.addEventListener('click', makeActive3);
l4.addEventListener('click', makeActive4);
l5.addEventListener('click', makeActive5);


function makeActive1() {
    
    labelsArray.forEach(label => label.classList.remove('active'));
    l1.classList.add('active');

}

function makeActive2() {

    labelsArray.forEach(label => label.classList.remove('active'));
    l1.classList.add('active');
    l2.classList.add('active');
}

function makeActive3() {

    labelsArray.forEach(label => label.classList.remove('active'));
    l1.classList.add('active');
    l2.classList.add('active');
    l3.classList.add('active');
}

function makeActive4() {

    labelsArray.forEach(label => label.classList.remove('active'));
    l1.classList.add('active');
    l2.classList.add('active');
    l3.classList.add('active');
    l4.classList.add('active');
}

function makeActive5() {

    labelsArray.forEach(label => label.classList.remove('active'));
    l1.classList.add('active');
    l2.classList.add('active');
    l3.classList.add('active');
    l4.classList.add('active');
    l5.classList.add('active');

}



/*
when user clicks "submit" button, submit the form

*/