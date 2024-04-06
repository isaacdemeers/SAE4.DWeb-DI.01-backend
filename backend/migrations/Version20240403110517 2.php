<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240403110517 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE watchlist (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE watchlist_movie (watchlist_id INT NOT NULL, movie_id INT NOT NULL, INDEX IDX_B38D698383DD0D94 (watchlist_id), INDEX IDX_B38D69838F93B6FC (movie_id), PRIMARY KEY(watchlist_id, movie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE watchlist_movie ADD CONSTRAINT FK_B38D698383DD0D94 FOREIGN KEY (watchlist_id) REFERENCES watchlist (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE watchlist_movie ADD CONSTRAINT FK_B38D69838F93B6FC FOREIGN KEY (movie_id) REFERENCES movie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD watchlist_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64983DD0D94 FOREIGN KEY (watchlist_id) REFERENCES watchlist (id)');
        $this->addSql('CREATE INDEX IDX_8D93D64983DD0D94 ON user (watchlist_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64983DD0D94');
        $this->addSql('ALTER TABLE watchlist_movie DROP FOREIGN KEY FK_B38D698383DD0D94');
        $this->addSql('ALTER TABLE watchlist_movie DROP FOREIGN KEY FK_B38D69838F93B6FC');
        $this->addSql('DROP TABLE watchlist');
        $this->addSql('DROP TABLE watchlist_movie');
        $this->addSql('DROP INDEX IDX_8D93D64983DD0D94 ON user');
        $this->addSql('ALTER TABLE user DROP watchlist_id');
    }
}
