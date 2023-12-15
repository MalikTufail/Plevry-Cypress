describe('DB testing', function(){
    it('creates a movie table', function(){
        cy.task('queryDb',
        'CREATE TABLE movies(id INT AUTO_INCREMENT,title VARCHAR(50) NOT NULL,genre VARCHAR(50) NOT NULL,director VARCHAR(60) NOT NULL,release_year INT NOT NULL,PRIMARY KEY (id))').then((result) => {
            expect(result.message).to.equal('');
        })
    })
    it('Insert data into movies table', function(){
        cy.task('queryDb',
        'INSERT INTO movies VALUES ("","Joker1", "psychological thriller", "Todd Philipps", 2019), ("","Money Heist", "action", "Berlin", 2020)').then((result) => {
            expect(result.affectedRows).to.equal(2);
            expect(result.message).to.equal('&Records: 2  Duplicates: 0  Warnings: 2')
        })
    })

    it('Select data from movies table', function(){
        cy.task('queryDb',
        'SELECT * FROM movies').then((result) => {
            expect(result[0].title).equal('Joker1')
            expect(result).to.have.length.of.at.most(2)
        })
    })

    it('Update data in movies table', function(){
        cy.task('queryDb',
        'UPDATE movies SET genre = "test genre" WHERE title="joker1"').then((result) => {
            // expect(result[0].title).equal('Joker1')
            // expect(result).to.have.length.of.at.most(4)
            expect(result.affectedRows).to.equal(1);
        })
    })
    it('Delete movies table', function(){
        cy.task('queryDb',
        'DROP TABLE movies').then((result) => {
            expect(result.message).to.equal('');
        })
    })
})
