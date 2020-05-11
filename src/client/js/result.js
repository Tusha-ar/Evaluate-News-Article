export const result = (res) =>{
    document.getElementById('polarity').innerHTML = res.polarity;
    document.getElementById('subjectivity').innerHTML = res.subjectivity;
    document.getElementById('polarity_con').innerHTML = res.polarity_confidence;
    document.getElementById('subjectivity_con').innerHTML = res.subjectivity_confidence;
}